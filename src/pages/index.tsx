import Link from "next/link";
import { useEffect, useState } from "react";

interface NoteInter {
  name: string;
  desc: string;
  type: number;
}

const Home = () => {
  const [filterButton, setFilterButton] = useState<number>(0);

  const [noteArray, setNoteArray] = useState<NoteInter[]>([]);
  const [newNote, setNewNote] = useState<string>("");

  const [openNote, setOpenNote] = useState<number>(-1);
  const [desc, setDesk] = useState<string>("");

  const [rel, setRel] = useState<boolean>(false);

  const addButton = () => {
    const newArray = [
      { name: newNote, desc: "", type: filterButton === -1 ? 0 : filterButton },
      ...noteArray,
    ];

    setNoteArray(newArray);
    setNewNote("");

    localStorage.setItem("array", JSON.stringify(newArray));
  };

  const deleteButton = (indexNum: number) => {
    const newArray = noteArray.filter((el, index) => index !== indexNum);

    setNoteArray(newArray);

    localStorage.setItem("array", JSON.stringify(newArray));
  };

  const openNoteButton = (index: number) => {
    setOpenNote(index);
    setDesk(noteArray[index].desc);
  };

  const addDesc = (index: number) => {
    noteArray[index].desc = desc;
    setNoteArray(noteArray);
    setOpenNote(-1);
    setDesk("");
    localStorage.setItem("array", JSON.stringify(noteArray));
  };

  useEffect(() => {
    if (localStorage.getItem("array") !== null) {
      setNoteArray(JSON.parse(localStorage.getItem("array") || ""));
    }
  }, []);

  const changeFilter = (index: number) => {
    setFilterButton(index);
    setRel(!rel);
  };

  const filterType = (index: number) => {
    return { [-1]: "Все заметки", [0]: "Важно", [1]: "Запланировано", [2]: "Напомоинание" }[index];
  };

  return (
    <>
      <div className="main">
        <div className="menu">
          <h1 className="title">MyNote</h1>
          <div className="menu__nav">
            <div className="menu__nav-title">
              <div onClick={() => changeFilter(-1)}>Все заметки</div>
            </div>
            <div className="menu__nav-title">
              <div onClick={() => changeFilter(0)}>Важно</div>
            </div>
            <div className="menu__nav-title">
              <div onClick={() => changeFilter(1)}>Запланировано</div>
            </div>
            <div className="menu__nav-title">
              <div onClick={() => changeFilter(2)}>Напоминания</div>
            </div>
          </div>
        </div>
        <div className="todo">
          <div className="todo__content">
            <h1 className="todo__title">{filterType(filterButton)}</h1>
            <div className="todo__new">
              <input
                type="text"
                placeholder="Новая заметка"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              />
              <div className="todo__add" onClick={addButton}>
                +
              </div>
            </div>
            <div className="todo__list">
              {noteArray
                .filter((el) =>
                  filterButton === -1 ? true : el.type === filterButton,
                )
                .map((el, index) => (
                  <div
                    className="todo__task"
                    key={index}
                    onClick={() => openNoteButton(index)}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        height: "36px",
                      }}
                    >
                      <div className="todo__task-container">
                        <label className="todo_checkbox">
                          <input type="checkbox" />
                          <div></div>
                        </label>
                        <div className="todo__task-text">{el.name}</div>
                        <div
                          className="todo__task-text"
                          style={{
                            marginLeft: "20px",
                            opacity: 0.3,
                          }}
                        >
                          {filterType(el.type)}
                        </div>
                      </div>
                      <div
                        className="todo__task-del"
                        onClick={() => deleteButton(index)}
                      >
                        -
                      </div>
                    </div>

                    {openNote === index && (
                      <div className="todo__task-write">
                        <textarea
                          className="todo__task-note"
                          value={desc}
                          onChange={(e) => setDesk(e.target.value)}
                        />
                        <button onClick={() => addDesc(index)}>Скрыть</button>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
