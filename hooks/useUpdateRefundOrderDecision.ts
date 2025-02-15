import { TOrderUpdateDecisionPayload } from "@/models/refundOrder";
import { updateRefundOrderDecision } from "@/services/refundOrders";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateRefundOrderDecision() {

  const queryClient = useQueryClient();

  const { mutate: updateOrderDecision, isPending: isUpdatingOrderDecision } = useMutation({
    mutationFn: (payload: TOrderUpdateDecisionPayload) => updateRefundOrderDecision(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["refundOrders"] });
    },
    onError: () => {
      toast.error("Failed to update refund order status");
    },
  });

  return { updateOrderDecision, isUpdatingOrderDecision };
}
