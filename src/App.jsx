import Botao from "./Botao"

function App(){

	const botao=[
		{
		   butao: "Tools",
		   
		},
	 
		{
			butao: "Pricing",
			
		 },

		 {
			butao: "Blog",
			
		 },

		 {
			butao: "About",
			
		 },

		 {
			butao: "Customers",
			
		 },



	 ];



	 return (


		<div className="con">
	
		  {botao.map((but, con) => {

			return <Botao key={con}
	
			  butao={but.butao}

			/>;
	
	
		  })

		  }
		 
		
	
		</div>
	  );
	}
	
	export default App