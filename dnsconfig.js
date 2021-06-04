var GANDI = NewDnsProvider("gandi", "GANDI_V5");
var REG_NONE = NewRegistrar("none", "NONE");

D("scp.link", REG_NONE, DnsProvider(GANDI),
    A("test","1.1.1.1"),
    NS("o", "ns1.he.net."),
    NS("o", "ns2.he.net."),
    NS("o", "ns3.he.net."),
    NS("o", "ns4.he.net."),
    NS("o", "ns5.he.net.")
);
