form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const entry = {
    workDate: document.getElementById("workDate").value,
    co186: document.getElementById("co186").value || 0,
    co252: document.getElementById("co252").value || 0,
    c210: document.getElementById("c210").value || 0,
    c18626: document.getElementById("c18626").value || 0,
    anthem: document.getElementById("anthem").value || 0,
    humana: document.getElementById("humana").value || 0,
    uhc: document.getElementById("uhc").value || 0,
    roi: document.getElementById("roi").value || 0,
  };
  entry.total = Object.values(entry).slice(1).reduce((a,b)=>a+Number(b),0);
  entry.status = entry.total >= 64 ? "✅" : "❌";
  entry.percent = entry.total ? ((entry.total/64)*100).toFixed(2)+"%" : "";

  await fetch("https://script.google.com/macros/s/AKfycbxW65Rcl3uAr6NvULQfYz2P2QX7aQITdjplHDTj9GGyKL2O_SYzg5Hvhsnk5ITgjYOVsA/exec", {
    method: "POST",
    body: JSON.stringify(entry)
  });
  alert("Data saved!");
  form.reset();
});
