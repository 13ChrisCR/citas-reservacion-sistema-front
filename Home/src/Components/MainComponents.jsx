import DoctorLogo from '../assets/doctor.svg'
import Cita from '../assets/fileicon.svg'
import './MainComponents.css'

export function Logo () {
    return(
        <div>
            <img className='tw-img-logo' src='https://images.weare365.io/filters:format(.webp)/1920x0/PE_Mifarma_299e2f303a.png'/>
        </div>
    )
}

export function Intra () {
    return(
        <div className='tw-header-main'>
            <div className='tw-header-main'>
                <img className='tw-svg-logo-sime'  src={Cita}/> <h1 className='tw-text-medium-header'>Ya tienes una cita programada?</h1>
            </div>
            <div>
                <img className='tw-svg-logo-sime'  src={DoctorLogo} />
            </div>
        </div>
    )
}

export function FooterHome () {
    return(
        <div className='tw-footer-main'>
        <div className='tw-line'></div>
        <div className='tw-footer-main-internal'>
            <div className='tw-footer-main-container'>
                <div><h1 className='tw-text-medium'>Contacto</h1>
                <div><text className='tw-text-small'>Correo: </text></div>
                <div><text className='tw-text-small'>correo@gmail.com</text></div>
                <div><text className='tw-text-small'></text></div>
                <div><text className='tw-text-small'>Central Telefonica: </text></div>
                <div><text className='tw-text-small'>(01) 612-5000</text></div>
                <div><text className='tw-text-small'></text></div>
                <div><text className='tw-text-small'>Whatsapp: </text></div>
                <div><text className='tw-text-small'>993 514 000</text></div>
            </div>
            </div>
            <div className='tw-footer-main-container'>
                <div><h1 className='tw-text-medium'>Siguenos</h1></div>
            </div>
            <div className='tw-footer-main-container'>
                <div><h1 ></h1></div>
            </div>
            <div className='tw-footer-main-container'>
                <div><h1 className='tw-text-medium'>Medios de Pago</h1></div>
            </div>
        </div>
        <div className='tw-footer-lower-container'>
            <h1 className='tw-text-small'>BOTICAS IP S.A.C. - R.U.C. N° 20608430301 | Copyright © Mifarma 2020 Todos los derechos reservados.</h1>
        </div>
        </div>
    )
}

export function MainHome () {
    return(
        <div className='tw-img-backgroundmain'>
            <div>hola</div>
        </div>
    )
}

export function HeaderHome () {
    return(
        <div>
            <div className='tw-line'></div>
            <div className='tw-header-main'>
                <div> <Logo /> </div>
                <div> <Intra/> </div>
            </div>
            <div className='tw-line'></div>
        </div>
    )
}