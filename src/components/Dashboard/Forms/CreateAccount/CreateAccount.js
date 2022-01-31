import "./createAccont.scss"
const CreateAccount = () => {
    return ( 
        <div>
            <div class="container">
	{/* <!-- code here --> */}
	<div class="card">
		<div class="card-image">	
			<h2 class="card-heading">
				Get started
				<small>Let us create your account</small>
			</h2>
		</div>
		<form class="card-form">
			<div class="input">
				<input type="text" class="input-field"  required/>
				<label class="input-label">Full name</label>
			</div>
						<div class="input">
				<input type="text" class="input-field"  required/>
				<label class="input-label">Email</label>
			</div>
						<div class="input">
				<input type="password" class="input-field" required/>
				<label class="input-label">Password</label>
			</div>
			<div class="action">
				<button class="action-button">Get start</button>
			</div>
		</form>
		<div class="card-info">
			<p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a> <a href="#">Create New account </a></p>
		</div>
	</div>
</div>

        </div>
     );
}
 
export default CreateAccount;