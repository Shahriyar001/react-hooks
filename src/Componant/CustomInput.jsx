import { forwardRef } from "react";

const CustomInput = forwardRef<any, {}>( ({ className }) => {
  return (
    <div>
      <input type="text" className={className} name="name" id="name" />
    </div>
  );
});

export default CustomInput;
