import '../styles/Header.css'

function Header()
{
    return (
        <header>
            <div class="container">
            <h1 class="logo"></h1>
            <nav>
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Milestone</a></li>
                <li><a href="#">Notes</a></li>
                <li><a href="#">Pictures</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;