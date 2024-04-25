package oslomet.oblig3kino;

public class KinoBillett {
    private String valgtFilm;
    private int antall;
    private String fNavn;
    private String eNavn;
    private int tlfnr;
    private String epost;

    public KinoBillett(){

    }
    public KinoBillett(String valgtFilm, int antall, String fNavn, String eNavn, int tlfnr, String epost) {
        this.valgtFilm = valgtFilm;
        this.antall = antall;
        this.fNavn = fNavn;
        this.eNavn = eNavn;
        this.tlfnr = tlfnr;
        this.epost = epost;
    }



    public String getValgtFilm() {
        return valgtFilm;
    }

    public int getAntall() {
        return antall;
    }

    public String getfNavn() {
        return fNavn;
    }

    public String geteNavn() {
        return eNavn;
    }

    public int getTlfnr() {
        return tlfnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setValgtFilm(String valgtFilm) {
        this.valgtFilm = valgtFilm;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public void setfNavn(String fNavn) {
        this.fNavn = fNavn;
    }

    public void seteNavn(String eNavn) {
        this.eNavn = eNavn;
    }

    public void setTlfnr(int tlfnr) {
        this.tlfnr = tlfnr;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}
