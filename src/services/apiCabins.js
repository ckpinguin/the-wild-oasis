import supabase, { supabaseUrl } from "./supabase"

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*")

  if (error) {
    console.error(error)
    throw new Error("Cabins could not get loaded")
  }

  return data
}

export async function createEditCabin(cabin, id) {
  const hasImagePath = cabin.image?.startsWith?.(supabaseUrl)

  const imageName = `${Math.random()}-${cabin.image.name}`.replaceAll("/", "")

  const imagePath = hasImagePath
    ? cabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  // 1. Create / edit cabin
  let query = supabase.from("cabins")

  // A) CREATE (no id means no editing mode)
  if (!id) query = query.insert([{ ...cabin, image: imagePath }])

  // B) EDIT
  if (id) query = query.update({ ...cabin, image: imagePath }).eq("id", id)

  const { data, error } = await query.select().single()

  if (error) {
    console.error(error)
    throw new Error("Cabin could not be created")
  }

  // 2. Upload image
  if (hasImagePath) return data

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.image)

  // Delete the cabin if there was an error uploading the corresponding image
  if (storageError) {
    //deleteCabin(data.id)
    await supabase.from("cabins").delete().eq("id", data.id)
    console.error(storageError)
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created."
    )
  }

  return data
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().match({ id })

  if (error) {
    console.error(error)
    throw new Error("Cabin could not be deleted")
  }

  return data
}
