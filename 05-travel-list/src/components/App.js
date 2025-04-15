import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id)); //items.filter返回一个新数组，保留那些不等于目标id的项（把目标id的项过滤掉）
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      `Are you sure you want to delete all items?`
    );
    if (confirmed) setItems([]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    ); //如果这个item的id和传进来的id一样->就是找到了修改的那项，将原来的packed的状态取反，不是就别动
  } //map遍历数组并生成一个新的数组，每一项可以被修改或者保留。

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
