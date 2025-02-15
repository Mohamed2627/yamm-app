interface IDecisionStatusProps {
  status: "reject" | "accept" | "escalate" | null;
}

const statusStyles = {
  reject: "bg-red-100 text-red-700 border-red-400",
  accept: "bg-green-100 text-green-700 border-green-400",
  escalate: "bg-yellow-100 text-yellow-700 border-yellow-400",
  notYet: "bg-gray-100 text-gray-700 border-gray-400",
};

const DecisionStatus = ({ status }: IDecisionStatusProps) => {
  const statusText = status ?? "notYet";

  return (
    <span className={`px-3 py-1 text-sm font-medium border rounded-md ${statusStyles[statusText]}`}>
      {statusText === "notYet" ? "Not Yet" : `${status?.charAt(0).toUpperCase()}${status?.slice(1)}`}
    </span>
  );
};

export default DecisionStatus;