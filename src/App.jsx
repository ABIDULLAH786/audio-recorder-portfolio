import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import useRecorder from "./hooks/useRecorder";
import "./App.css";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  return (
    <section className="bg-teal-100 min-h-screen">
      <h1 className="text-center py-4 font-semibold text-3xl">Voice Recorder</h1>
      <div className=" flex justify-center">
        <div className="bg-teal-600 mx-10 md:mx-0 md:w-1/2 p-5 rounded-lg">
          <RecorderControls recorderState={recorderState} handlers={handlers} />
          <RecordingsList audio={audio} />
        </div>
      </div>
    </section>
  );
}
