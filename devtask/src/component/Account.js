import './Account.css';
function Account(){
    return(
        <div className = "account-content">
            <section className="section">Account Settings</section>
            <div className="profile">
            <img src='pic.png' alt="profile pic"/>
            <div className = "info">
            <h4>Marry Doe</h4>
            <p className = "email">Marry@Gmail.Com</p>
            </div>
            </div>
            <p className = "descrip">Lorem ipsum dolor sit amet, Consectetur Sadipscing <br/> Elitr, Sed Diam Nonumy Eirmod Tempor invidunt Ut <br/>Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            <hr/>
        </div>
    );
}
export default Account;