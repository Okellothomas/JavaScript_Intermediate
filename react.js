/**
 * first react code
 */
const navbar = (
    <nav>
        <ul>
            <li>Pricing</li> 
            <li>About</li> 
            <li>Contact</li> 
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("nav"))
ReactDOM.render(<>
    <p>Okello should have come early</p>
    <ol>
        <li> This is the proper way of doing things</li>
        <li> I think we should actually give him a chance!</li>
    </ol>
</>, document.getElementById("root"))