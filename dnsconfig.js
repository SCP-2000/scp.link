var GANDI = NewDnsProvider("gandi", "GANDI_V5");
var REG_NONE = NewRegistrar("none", "NONE");

D("scp.link", REG_NONE, DnsProvider(GANDI),
    A("test","1.1.1.1")
);
