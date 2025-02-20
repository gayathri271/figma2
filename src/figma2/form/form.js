import './form.css'

function Form(){
    return(
        <div id="parent">
            <div id="data-left">
                <p>Ready to take your project to the next level with?</p>
                <h1>Get in touch with us today to discuss about your project and discover how we can assist you in crafting, building, and presenting a reputable online brand.</h1>
                <p>a consultation and discuss how we can support your project.</p>
            </div>
            <div id="data-right">
                <div id="right-first">
                    <input placeholder="John Doe"></input>
                    <input placeholder="mail@example.com"></input><br />
                    </div>
                    <div id="right-second">
                    <textarea placeholder="Type here"></textarea><br /><br />
                    <button>Send Message</button>
                    </div>
                {/* </div> */}

            </div>
        </div>
    )
}
export default Form;