import { useEffect, useState } from "react";

interface NoteInter {
  name: string;
  desc: string;
}

const Home = () => {
  const [newNote, setNewNote] = useState<string>("");
  const [noteArray, setNoteArray] = useState<NoteInter[]>([]);

  const [openNote, setOpenNote] = useState<number>(-1);
  const [desc, setDesk] = useState<string>("");

  const [rel, reload] = useState<boolean>(false);

  const addButton = () => {
    noteArray.push({ name: newNote, desc: "" });
    setNoteArray(noteArray);
    setNewNote("");
    localStorage.setItem("array", JSON.stringify(noteArray));
    reload(!rel);
  };

  const deleteButton = (index: number) => {
    noteArray.splice(index, 1);
    setNoteArray(noteArray);
    localStorage.setItem("array", JSON.stringify(noteArray));
    reload(!rel);
  };

  const openNoteButton = (index: number) => {
    setOpenNote(index);
    setDesk(noteArray[index].desc);
    reload(!rel);
  };

  const addDesc = (index: number) => {
    noteArray[index].desc = desc;
    setNoteArray(noteArray);
    setOpenNote(-1);
    setDesk("");
    localStorage.setItem("array", JSON.stringify(noteArray));
    reload(!rel);
  };

  useEffect(() => {
    if (localStorage.getItem("array") !== null) {
      setNoteArray(JSON.parse(localStorage.getItem("array") || ""));
    }
  }, []);

  return (
    <>
    <div className="main">
      <div className="menu">
        <h1 className="title">MyNote</h1>
        <div className="menu__nav">
          <div className="menu__nav-title"><a href="">Все заметки</a></div>
          <div className="menu__nav-title"><a href="">Важно</a></div>
          <div className="menu__nav-title"><a href="">Запланировано</a></div>
          <div className="menu__nav-title"><a href="">Напоминания</a></div>
        </div>
      </div>
      <div className="todo">
        <div className="todo__content">
            <h1 className="todo__title">Все заметки</h1>
            <div className="todo__new">
                <input type="text" placeholder="Новая заметка" value={newNote} onChange={(e) => setNewNote(e.target.value)}/>
                <div className="todo__add" onClick={addButton}>+</div>
            </div>
            <div className="todo__list">
              {noteArray.map((el, index) => (
                <div className="todo__task" key={index} >
                  <div className="todo__task-container">
                    <label className="todo_checkbox">
                          <input type="checkbox"/>
                          <div></div>
                    </label>
                    
                      <div className="todo__task-text" onClick={() => openNoteButton(index)}>{el.name}</div>
                      
                      

                  </div>
                  
                    {openNote === index && (
                    <div className="todo__task-write">
                      <textarea className="todo__task-note"
                        value={desc}
                        onChange={(e) => setDesk(e.target.value)}
                      />
                      <button onClick={() => addDesc(index)}>Скрыть</button>
                    </div>
                  )}
                  <div className="todo__task-del" onClick={() => deleteButton(index)}>-</div> 
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
