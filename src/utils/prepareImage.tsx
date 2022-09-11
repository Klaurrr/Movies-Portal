import errorImg from "assets/img/errorImg.png";


const prepareImage = (value: string | undefined, styleImg: string) => 

    value ? <img className={styleImg} src={value} alt="show_image" /> : <img className={styleImg} src={errorImg} alt="show_image" />

    export default prepareImage;

