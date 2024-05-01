import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings"
import toast from "react-hot-toast"

export function useDeleteBooking() {
  const queryClient = useQueryClient()

  const { isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking deleted successfully!")
      queryClient.invalidateQueries(["bookings"])
    },
    onError: (error) => toast.error(`Error deleting booking: ${error.message}`),
  })

  return { deleteBooking, isDeleting }
}
