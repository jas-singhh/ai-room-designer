import { Textarea } from "@/components/ui/textarea";
import React from "react";

const AdditionalComments = ({ comments }) => {
  return (
    <div>
      <Textarea placeholder="Add any additional comments here (Optional)" onChange={(e) => comments(e.target.value)} />
    </div>
  );
};

export default AdditionalComments;
