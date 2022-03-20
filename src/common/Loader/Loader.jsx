/** @jsxImportSource @emotion/react */

import PulseLoader from "react-spinners/PulseLoader";

const wrapperStyles = {
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

const Loader = () => {
  return (
    <div css={wrapperStyles}>
      <PulseLoader margin={4} size={13} color={"#ff6b0a"} />
    </div>
  );
};

export default Loader;
