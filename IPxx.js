$httpClient.get("https://forge.speedtest.cn/api/location/info", function (error, response, data) {
    let dataObject = JSON.parse(data);
    let { country, province, isp, city, ip } = dataObject;
    isp = `运营商：${isp}`;
    ip = `IP：${ip}`;
    let region = `地区：${country} ${province} ${city}`;
    body={
        title: "当前节点信息",
        content: `${isp}\n${ip}\n${region}`,
        backgroundColor: "#FF6600",
        icon: "antenna.radiowaves.left.and.right.circle.fill",
    }
    $done(body)
})
