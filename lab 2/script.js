// Jamar Plummer 2405323
const form = document.getElementById("receiptForm");

const receipt = document.getElementById('receiptCard');

const printBtn = document.getElementById('printBtn');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const tenantName = document.getElementById("tenantName").value;
    const landlordName = document.getElementById("landlordName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const unit = document.getElementById("unit").value;
    const amount = document.getElementById("amount").value;
    const paymentDate = document.getElementById("paymentDate").value;
    const startPeriod = document.getElementById("startPeriod").value;
    const endPeriod = document.getElementById("endPeriod").value;
    const paymentMethod = document.getElementById("method").value;
    const receiptId = document.getElementById("receiptId").value;
    const notes = document.getElementById("notes").value;
    const signature = document.getElementById("signature").value;

    const formattedAmount = amount ? '$' + parseFloat(amount).toFixed(2) : 'N/A';

    const receiptHTML = `
        <h2>RENT RECEIPT</h2>
        
        <div class="receipt-row">
            <span class="receipt-label">Receipt ID:</span>
            <span class="receipt-value">${receiptId || 'N/A'}</span>
        </div>
        
        <div class="receipt-row">
            <span class="receipt-label">Payment Date:</span>
            <span class="receipt-value">${paymentDate || 'N/A'}</span>
        </div>
        
        <div class="receipt-row">
            <span class="receipt-label">Tenant Name:</span>
            <span class="receipt-value">${tenantName}</span>
        </div>
        
        <div class="receipt-row">
            <span class="receipt-label">Landlord Name:</span>
            <span class="receipt-value">${landlordName}</span>
        </div>
        
        <div class="receipt-row">
            <span class="receipt-label">Email:</span>
            <span class="receipt-value">${email || 'N/A'}</span>
        </div>
        
        <div class="receipt-row">
            <span class="receipt-label">Phone:</span>
            <span class="receipt-value">${phone || 'N/A'}</span>
        </div>
        
        <div class="receipt-row">
            <span class="receipt-label">Property Address:</span>
            <span class="receipt-value">${address || 'N/A'}</span>
        </div>
        
        <div class="receipt-row">
            <span class="receipt-label">Unit Number:</span>
            <span class="receipt-value">${unit || 'N/A'}</span>
        </div>
        
        <div class="receipt-row">
            <span class="receipt-label">Rental Period:</span>
            <span class="receipt-value">${startPeriod || 'N/A'} to ${endPeriod || 'N/A'}</span>
        </div>
        
        <div class="receipt-row receipt-total">
            <span class="receipt-label">Amount Paid:</span>
            <span class="receipt-value">${formattedAmount}</span>
        </div>
        
        <div class="receipt-row">
            <span class="receipt-label">Payment Method:</span>
            <span class="receipt-value">${paymentMethod || 'N/A'}</span>
        </div>
        
        <div class="receipt-row">
            <span class="receipt-label">Notes:</span>
            <span class="receipt-value">${notes || 'N/A'}</span>
        </div>
        
        <div class="receipt-row">
            <span class="receipt-label">Signature:</span>
            <span class="receipt-value">${signature || 'N/A'}</span>
        </div>
    `;

    receipt.innerHTML = receiptHTML;

    receipt.classList.remove('hidden');

});

printBtn.addEventListener('click', function(e) {

    
    if (receipt.classList.contains('hidden')){
        alert('Generate a receipt first');
        return;
    };

    const formSection = document.getElementById("formPanel");
    formSection.classList.add('hidden');
    window.print();
    formSection.classList.remove('hidden');
})

// I'm the goat
// Jamar Plummer 2405323