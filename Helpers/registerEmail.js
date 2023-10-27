
exports.registerEmail = (username) => {
  return (  
    `<table align='center' cellPadding="10" cellSpacing="0" style="background-color:#000">
        <tbody>
            <tr>
                <td>
                    <h1>Welcome to Our E-commerce Website!</h1>
                    <p>Dear ${username}</p>
                    <p>We are excited to have you as new member of our online shopping community.</p>
                    <p>Here are some of the benefites you can engoy:</p>

                    <ul>
                        <li>Wide selection of product</li>
                        <li>Competitve prices</li>
                        <li>Fast and secure checkout</li>
                        <li>Excellent customer support</li>
                    </ul>

                    <p>Start shoppin now and discover the latest trends and amazing deals!</p>
                    <a href='https://example.com/shop' style="display : inline-block; padding: 10px"></a>

                </td>
            </tr>
            <tr>
                <td>
                    <p>If you have any questions or need assistance, feel free to contact our friend</p>
                    <p>Thank you for choosing [Your E-commerce Website Name]. Happy Shopping!</p>
                </td>
            </tr>
            <tr>
                <td style="background=color:#007bff">
                    <p style="margin-left:0; margin-right:0;">Follow us on social media:</p>
                    <a href='#' style="color:#ffffff; text-decoration:none; margint-right: 10px;">Facebook</a>

                </td>
            </tr>
        </tbody>
    </table>`
  )
}
