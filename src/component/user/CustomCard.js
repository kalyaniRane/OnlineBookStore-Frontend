import React, {Component} from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import "../../css/CustomCard.css";


class CustomCard extends Component {
    render() {
            let index=this.props.index;
            let book=this.props.book;
        return (
                <Card className="gridroot">
                    <span className="tooltiptext" style={(index+1)%4===0 ? {marginLeft: "-315px"} : {marginLeft:"106px"}}><b>Book Description:</b><p className="tooltip-p">{book.description}</p></span>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className="image1"
                            height="200"
                            image={require(`../../asset/${book.imageUrl}`)}/>

                        <div id="stock-label" style={book.quantity===0 ? {visibility:"visible",color:"#FF0000"} : {visibility:"hidden"}}>Out Of Stock</div>
                    </CardActionArea>
                    <CardContent>
                        <Typography component="h2"  id="bookname">
                            <b> {book.bookName}</b>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" id="authorname">
                            by {book.authorName}
                        </Typography>
                        <Typography component="h2" id="bookprice">
                            <b> Rs.{book.bookPrice}</b>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button style={book.quantity=== 0 ? {backgroundColor:"#d3d3d3",pointerEvents:"none",marginBottom: "2%",width:"60%"}
                            : {backgroundColor: "rgb(165,42,42)", width: "60%", marginBottom: "2%",color:"#fff"}}>
                            Add To Bag
                        </Button>
                    </CardActions>
                </Card>
        );
    }
}

export default CustomCard;