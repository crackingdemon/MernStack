import React from 'react';
import "../components/Contact.css"

const Contact = () => {
    return (
        <>
            <div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" ></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
        </>
    )
}

export default Contact
