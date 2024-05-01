import Button from "../../ui/Button"
import CreateCabinForm from "./CreateCabinForm"
import CabinTable from "./CabinTable"
import Modal from "../../ui/Modal"

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  )
}

/* export default function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpenModal(true)}>Add cabin</Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  )
}
 */
