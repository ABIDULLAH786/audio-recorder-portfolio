import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "../../hooks/useRecordingsList";
import "./styles.css";

export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  return (
    <div className="text-center h-[410px]">
      {recordings.length > 0 ? (
        <>
          <h1 className="font-medium text-xl pb-2">Recordings List</h1>
          <div className="overflow-y-auto max-h-[350px] d-grid lg:px-32 recordings-list ">
            {recordings.map((record, index) => (
              <div className="grid grid-cols-[20px_minmax(300px,_1fr)_1px] items-center space-x-2">
                <h2 className="text-lg font-medium">{index + 1}</h2>
                <div
                  className="flex justify-center p-2 space-x-2"
                  key={record.key}
                >
                  <audio controls src={record.audio} />
                  {/* delete button */}
                  <div className="flex items-center">
                    <button
                      className="text-red-600 bg-white w-8 h-8 rounded-full  hover:text-black"
                      title="Delete this audio"
                      onClick={() => deleteAudio(record.key)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} className="w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <div>
            <FontAwesomeIcon
              icon={faExclamationCircle}
              size="2x"
              color="#f2ea02"
            />
            <h2 className="text-lg font-medium">No voice records found</h2>
          </div>
        </div>
      )}
    </div>
  );
}
