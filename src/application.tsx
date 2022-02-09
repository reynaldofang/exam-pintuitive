import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink, Row, Col, CardTitle, CardText, Card, CardBody } from 'reactstrap';

import SimpleImageSlider from "react-simple-image-slider";


import Modals from 'react-modal';

import './App.css';

import Img1 from './img/photo1.jpg';
import Img2 from './img/photo2.jpg';
import Img3 from './img/photo3.jpg';
import Img4 from './img/photo4.jpg';
import Img5 from './img/photo5.jpg';

export interface IApplicationProps { }

const images = [
    {
        url: Img1
    },
    {
        url: Img2
    },

    {
        url: Img3
    },
    {
        url: Img4
    },
    {
        url: Img5
    },
];

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



const Application: React.FunctionComponent<IApplicationProps> = props => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function toggleModel() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='App'>
            <Navbar className='Nav'
                color="light" variant="dark" fixed="top" sticky="top">
                <NavbarBrand className='logo' href="/">
                    Pintuitive
                </NavbarBrand>

                <Nav>
                    <NavLink href='/'>Jual</NavLink>
                    <NavLink href='/'>Beli</NavLink>
                    <NavLink href='/'>Sewa</NavLink>

                </Nav>

            </Navbar>

            <Container >
                <Row >
                    <Col className='border colborder_photo' md='6'>
                        <SimpleImageSlider width={685}
                            height={516}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                            onClick={toggleModel} />
                    </Col>
                    <Col className='border' md='4'>
                        <Row className='row-margin' md='6' >
                            <img className='row_photo' src={Img1} />
                        </Row>
                        <Row className='row-margin' md='4'>
                            <img className='row_photo' src={Img4} />
                        </Row>
                    </Col>

                </Row>
                <Modals
                    isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                    <SimpleImageSlider width={685}
                        height={516}
                        images={images}
                        showBullets={true}
                        showNavs={true} />
                </Modals>
            </Container>

            <Container>
                <p className='font-top'>Apartement</p>
                <h4 className='content_info font-desc'>Apartemen Sentra Timur Tower Tosca Lantai 11 Pulo Gebang, Kec. Cakung, Jakarta Timur 13950</h4>
        
            </Container>
            <Container>
                <div className='content'>
                    <h4 className='content_info'>Deskripsi</h4>
                </div>
                <CardBody>
                    <CardText>
                        Dijual Cepat Unit Apartemen Sentra Timur Tower Tosca di Cakung, Jakarta Timur
                    </CardText>
                    <CardText>
                        Jual Cepat Apartemen tower baru, Lantai Rendah, bonus SAMA ISI ISINYA, full set. (Sesuai gambar)

                        2 Kamar Tidur, 1 Kamar Mandi + Balkon.
                    </CardText>
                    <CardText>
                        sudah SHM, tinggal balik nama.
                    </CardText>
                    <CardText>
                        Bisa dibantu KPR ke Bank.  Bayar Cash : bisa diskon.
                    </CardText>
                    <CardText>
                        Fasilitas lengkap. Pake kartu akses, gak sembarangan. Parkir motor mobil owner : free.

                        Depan terminal pulogebang

                        Depan pintu tol cakung (JORR)

                        Tol pulogebang-kemayoran udah jadi..
                    </CardText>

                    <CardText>
                        daripada beli baru tower sebelah (6xx jutaan), mending ini aja.. udah sama isi perabotnya juga.
                    </CardText>
                    <CardText>
                        Dipersilahkan hub saya via whatsapp atau telepon.

                        (Buat Yang Serius Aja)
                    </CardText>

                </CardBody>
            </Container>


            <Container>
                <div className='line'></div>
                <div className='content'>
                    <h4 className='content_info'>Detail Informasi</h4>
                    <Row className='col-row' >
                        <Col sm="6">
                            <Card body className='content_display' >
                                <CardTitle>Tipe Properti</CardTitle>
    
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Tipe Iklan</CardTitle>
                
                            </Card>
                        </Col>
                    </Row>
                    <Row className='col-row' >
                        <Col sm="6">
                            <Card body className='content_display' >
                                <CardTitle>Sertifkat</CardTitle>
    
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Hadap</CardTitle>
                
                            </Card>
                        </Col>
                    </Row>
                    <Row className='col-row' >
                        <Col sm="6">
                            <Card body className='content_display' >
                                <CardTitle>Kamar Tidur</CardTitle>
    
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Kamar Mandi</CardTitle>
                
                            </Card>
                        </Col>
                    </Row>
                    <Row className='col-row' >
                        <Col sm="6">
                            <Card body className='content_display' >
                                <CardTitle>Daya Listrik</CardTitle>
    
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Luas Tanah</CardTitle>
                
                            </Card>
                        </Col>
                    </Row>
                    <Row className='col-row' >
                        <Col sm="6">
                            <Card body className='content_display' >
                                <CardTitle>Jumlah Tanah</CardTitle>
    
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Jumlah Lantai</CardTitle>
                
                            </Card>
                        </Col>
                    </Row>
            
                </div>

            </Container>
        </div>

    );
}

export default Application;