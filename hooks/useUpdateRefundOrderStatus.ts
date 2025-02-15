import { TOrderUpdateStatusPayload } from "@/models/refundOrder";
import { updateRefundOrderStatus } from "@/services/refundOrders";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateRefundOrderStatus() {

  const queryClient = useQueryClient();

  const { mutate: updateOrderStatus, isPending: isUpdatingOrderStatus } = useMutation({
    mutationFn: (payload: TOrderUpdateStatusPayload) => updateRefundOrderStatus(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["refundOrders"] });
    },
    onError: () => {
      toast.error("Failed to update refund order status");
    },
  });

  return { updateOrderStatus, isUpdatingOrderStatus };
}
