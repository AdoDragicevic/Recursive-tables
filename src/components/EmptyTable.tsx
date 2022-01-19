import useToggle from "../hooks/useToggle";


const EmptyTable = () => {

  const [isReseting, toggleReseting] = useToggle(false);

  const handleClick = () => {
    toggleReseting();
    localStorage.clear();
    window.location.reload();
  }

  if (isReseting) return <p className="empty-table__msg"> {`Reloading data...`} </p>

  return (
    <div className="empty-tabe">
      <p className="empty-table__msg"> Table is empty </p>
      <p className="empty-table__msg">
        This is a demo app. 
        If you want to restore the deleted data, 
        delete your browser local storage or click 
        <button className="empty-table__btn" onClick={handleClick}> here </button>.
      </p>
    </div>
  )
}

export default EmptyTable;