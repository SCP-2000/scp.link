var GANDI = NewDnsProvider("gandi", "GANDI_V5");
var REG_GANDI = NewRegistrar("gandi", "GANDI_V5");

D("scp.link", REG_GANDI, DnsProvider(GANDI),
    A("test","1.1.1.1")
);
