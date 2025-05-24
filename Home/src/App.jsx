import './App.css'

export function Logo () {
    return(
        <div>
            <img className='tw-img-logo' src='https://images.weare365.io/filters:format(.webp)/1920x0/PE_Mifarma_299e2f303a.png'/>
        </div>
    )
}

export function Intra () {
    return(
        <div>
            
                    </div>
    )
}

export function FooterHome () {
    return(
        <div className='tw-footer-main'>
        <div className='tw-footer-main-internal'>
            <div className='tw-footer-main-container'>
                <div><h1 className='tw-text-medium'>Contacto</h1>
                <div><text className='tw-text-small'>correo@gmail.com</text></div>
            </div>
            </div>
            <div className='tw-footer-main-container'>
                <div><h1>Siguenos</h1></div>
            </div>
            <div className='tw-footer-main-container'>
                <div><h1></h1></div>
            </div>
            <div className='tw-footer-main-container'>
                <div><h1>Medios de Pago</h1></div>
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
                <div> <h1></h1> </div>
                <div> <Intra/> </div>
            </div>
            <div className='tw-line'></div>
        </div>
    )
}