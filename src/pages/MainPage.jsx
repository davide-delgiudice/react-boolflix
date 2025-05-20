import Cinema from "./Cinema"

const MainPage = () => {
  return (
    <>
        <header>
            <div>
                <form action="">
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" />
                    </div>
                    <div>
                        <button>
                            Cerca
                        </button>
                    </div>
                </form>
            </div>
        </header>
        <main>
            <Cinema />
        </main>
    </>
  )
}

export default MainPage