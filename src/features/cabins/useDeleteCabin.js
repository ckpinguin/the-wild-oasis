import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins"
import toast from "react-hot-toast"

export function useDeleteCabin() {
  const queryClient = useQueryClient()

  const { isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin deleted successfully!")
      queryClient.invalidateQueries(["cabins"])
    },
    onError: (error) => toast.error(error.message),
  })

  return { isDeleting, deleteCabin }
}
