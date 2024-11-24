function Input({ label, handleInputChange, value }) {
  return (
    <div className="input">
      <label>{label}</label>
      <input type="number" required onChange={handleInputChange} value={value} />
    </div>
  );
}

export { Input };
