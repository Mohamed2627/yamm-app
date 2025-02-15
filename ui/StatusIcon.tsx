import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface StatusIconProps {
  active: boolean;
  size?: number;
  className?: string;
}

const StatusIcon: React.FC<StatusIconProps> = ({ active, size = 24, className = "" }) => {
  return active ? (
    <FaCheckCircle color="green" className={className} size={size} />
  ) : (
    <FaTimesCircle color="red" className={className} size={size} />
  );
};

export default StatusIcon;