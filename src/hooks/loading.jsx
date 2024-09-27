import { ImSpinner8 } from "react-icons/im";
const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(0,0,0,0.3)",
      }}
    >
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <ImSpinner8
        size={50}
        color="red"
        style={{
          animation: "spin 1s linear infinite",
        }}
      />
    </div>
  );
};

export default Loading;
