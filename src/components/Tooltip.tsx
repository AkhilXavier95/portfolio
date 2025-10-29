"use client";

import { Tooltip } from "react-tooltip";

export default function SkillTooltip() {
  return (
    <Tooltip
      id="skill-tooltip"
      place="bottom"
      className="!bg-gray-900 !text-white !px-3 !py-2 !rounded-lg !text-sm"
    />
  );
}
