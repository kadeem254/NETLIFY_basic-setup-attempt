import "./index.scss";

async function getNelifyData(){
  try{
    let results = await fetch(
      "/api/testFunction"
    );
    console.log( results );

    let data = await results.json();
    console.log( data )
  }
  catch( error ){
    console.log( error );
  }
  return;
}

function init(){
  getNelifyData();
  return;
}

window.addEventListener( "load", init );