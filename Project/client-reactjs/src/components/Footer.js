import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ marginTop: '10px', color:'#003366', width:'100%' }}>
      {<MDBFooter className=' text-center text-white' style={{ width: '100%', backgroundColor:'#0e2f44'  }}>
        <MDBContainer className='d-flex justify-content-between p-4 pb-0' style={{ width: '100%'}}>
          <section className="text-left" style={{ color: 'white', width: '50%', textAlign: 'left' }}>
            <div>
              <b>Contact Us:</b>
              <p>Phone: 123-467-891<br />Email: questrise@gmail.com<br />Address: Jalgaon-425001</p>
            </div>
          </section>

          <section className="text-center" style={{ color: 'white', width: '50%', textAlign: 'left' }}>
            <div>
              <b>Timing :</b>
              <p>Monday - Sunday : 9:00 am - 9:00 pm </p>
            </div>
          </section>

          <section className="text-right" style={{ width: '50%' }}>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#3b5998' }}
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              role='button'
            >
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#55acee' }}
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              role='button'
            >
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#dd4b39' }}
              href='https://plus.google.com'
              target='_blank'
              rel='noopener noreferrer'
              role='button'
            >
              <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#ac2bac' }}
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              role='button'
            >
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#0082ca' }}
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              role='button'
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#333333' }}
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              role='button'
            >
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor:'#0e2f44' }}>
          © 2024 Copyright : <a className='text-white' href='https://thequestrisepark.com/'> QuestRisePark.com </a>
        </div>
      </MDBFooter>}

    </nav>
  );
};

export default Footer;
