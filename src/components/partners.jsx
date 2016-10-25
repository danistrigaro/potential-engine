// react
import React from 'react'
// material ui
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
//icons
import logoSupsi from '../data/icons/supsi.png'
import logoUgm from '../data/icons/ugm3.gif'
import logoUoM from '../data/icons/uom2.png'
import logoMoratuwa from '../data/icons/moratuwa.png'
import logoIst from '../data/icons/ist_pk.png'
//images
import partners from '../data/images/background/partners.jpg'

const Partners = React.createClass({
  handleClickHref (value, event) {
    window.open(value, '_blank');
  },
  render () {
    let heightCarousel
    if (this.props.size.width>=992) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else if (this.props.size.width>=750) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else {
      heightCarousel = (this.props.size.width/1.77)
    }
    let styleCarouselItem = {
      backgroundImage: 'url('+partners+')',
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    let styleAction = {
      textAlign: 'right'
    }
    const tilesData = [
      {
        img: logoSupsi,
        title: <strong>SUPSI - The University of Applied Sciences and Arts of Southern Switzerland (<em>Main Partner</em>)</strong>,
        subtitle: <p><strong>Institute of earth sciences</strong>, <em>Trevano - Blocco C Via Trevano, 6952 Canobbio</em></p>,
        url: 'http://www.supsi.ch/ist_en/'
      },
      {
        img: logoUoM,
        title: <strong>UoM - University of Moratuwa</strong>,
        subtitle: <p><em>Bandaranayake Mawatha, Katubedda, Moratuwa 10400, Sri Lanka</em></p>,
        url: 'https://www.mrt.ac.lk/web/'
      },
      {
        img: logoIst,
        title: <strong>IST - Institute of Space Technology</strong>,
        subtitle: <p><em>1, Islamabad Highway, Islamabad 44000</em></p>,
        url: 'http://www.ist.edu.pk/'
      },
      {
        img: logoUgm,
        title: <strong>UGM - Universitas Gadjah Mada</strong>,
        subtitle: <p><em>Bulaksumur, Yogyakarta,Indonesia 55281</em></p>,
        url: 'http://ugm.ac.id/en/'
      },
    ];
    return (
      <div id='page-top'>
        <div style={styleCarouselItem}></div>
        <div className='container' style={{paddingBottom: '10px'}}>
          <h2 className='title-page'>Partners</h2>
          <Divider />
          <List style={{textAlign: 'left'}}>
          {tilesData.map((tile, index) => (
            <div key={'list-card-'+index}>
              <ListItem
                rightAvatar={<Avatar src={tile.img} />}
                primaryText={tile.title}
                secondaryText={tile.subtitle}
                onClick={this.handleClickHref.bind(this,tile.url)}
                className='card'
              />
            </div>
          ))}
          </List>
        </div>
      </div>
    )
  }
})

export default Partners