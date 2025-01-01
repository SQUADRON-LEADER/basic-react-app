export default function Price({ oldprice, newprice }) {
  let oldstyles={
    textDecoration:"line-through",
  };
  let newstyles={
    fontWeight:"bold",
  };
  let styles={
    backgroundColor:"#BA8E23",
    height:"50px",
    borderBottomLeftRadius:"15px",
    borderBottomRightRadius:"15px",
  };
    return (
      <div style={styles}>
           <span style={oldstyles}> {oldprice}</span>
           &nbsp;&nbsp;&nbsp;
          <span style={newstyles}>{newprice}</span>
      </div>
    );
  }
  