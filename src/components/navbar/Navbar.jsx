function Navbar() {
  return (
    <div className="w-[100%] bg-[#030303a9] text-white">
      <div className="flex   max-w-[1200px] m-auto justify-between items-center py-5">
        <h1>Logo</h1>

        <ul className="flex gap-10 items-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Location</a>
          </li>
        </ul>
        <button className="bg-blue-500 text-white p-2 rounded-md">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
