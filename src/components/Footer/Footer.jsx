import React from 'react'

const Footer = () => {
    const dateNow = new Date();
    return (
        <>
            <footer class="page-footer font-small position-fixed bottom-0 w-100" style={{ background: "indigo", bottom: 0 }}>
                <div class="footer-copyright text-center py-3" style={{ color: "white" }}> Copyright © {dateNow.getFullYear()}
                    <span> ET by Ritesh 😄</span>
                </div>
            </footer>
        </>
    )
}

export default Footer