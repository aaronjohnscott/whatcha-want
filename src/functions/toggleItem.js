
export const toggleItem = (item, list, setList, e) => {
    if (list.includes(item)) {
      setList(list.filter((listItem) => listItem !== item));
    } else {
      setList([...list, item]);
    }
    e.target.classList.toggle("clicked")
  };
