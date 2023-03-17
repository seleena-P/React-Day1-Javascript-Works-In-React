console.log("Message to Developer")
function Alertmsg(){
    const hy=()=>{alert("Message from Javascript")}
    return <div><button onClick={hy}>click</button> </div>
}
ReactDOM.render(<Alertmsg/>,document.getElementById('s'))