import { cn } from '@/lib/utils';
import React from 'react'

interface ISwitchToggleProps {
  isActive: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SwitchToggle = ({ isActive, onChange }: ISwitchToggleProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isActive}
        onChange={onChange}
        className="sr-only peer"
      />
      <div
        className={cn("w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition", isActive ? "bg-green-500" : "bg-gray-300")}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${isActive ? "translate-x-6" : ""
            }`}
        ></div>
      </div>
    </label>
  )
}

export default SwitchToggle