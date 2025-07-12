import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const RoomType = ({ selectedRoomType }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="room-type" className="text-sm text-gray-600 font-medium">
        Select Room Type *
      </label>

      <Select id="room-type" classNamew="w-full" onValueChange={selectedRoomType}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a Room Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Living Room">Living Room</SelectItem>
            <SelectItem value="Bedroom">Bedroom</SelectItem>
            <SelectItem value="Bathroom">Bathroom</SelectItem>
            <SelectItem value="Kitchen">Kitchen</SelectItem>
            <SelectItem value="Office">Office</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default RoomType;
