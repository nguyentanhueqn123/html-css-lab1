import ItemList from "./ItemList";

function App() {
	return (
		<div className="App">
			{/* <h1>
				Drum
				<img src={ImgSrc} alt="logo" />
				Kit
			</h1> */}
			<div class="title-container">
            <span>Drum</span>
			<img class="logo-img" src="https://f7-zpcloud.zdn.vn/1017756757484395760/0cd6e9c7dcf01bae42e1.jpg" alt="" />
            <span>Kit</span>
        </div>
			<ItemList />
		</div>
	);
}

export default App;
