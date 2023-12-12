package Kursovaya20.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya20.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ОказКонсульт
 */
@Entity(name = "IISKursovaya20ОказКонсульт")
@Table(schema = "public", name = "ОказКонсульт")
public class OkazKonsult {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ВремяКонсульт")
    private Integer времяконсульт;

    @Column(name = "ПредостУслуга")
    private String предостуслуга;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PerechenUslug")
    @Convert("PerechenUslug")
    @Column(name = "ПереченьУслуг", length = 16, unique = true, nullable = false)
    private UUID _perechenuslugid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PerechenUslug", insertable = false, updatable = false)
    private PerechenUslug perechenuslug;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dogovor")
    @Convert("Dogovor")
    @Column(name = "Договор", length = 16, unique = true, nullable = false)
    private UUID _dogovorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dogovor", insertable = false, updatable = false)
    private Dogovor dogovor;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RaschetOstVrem")
    @Convert("RaschetOstVrem")
    @Column(name = "РасчетОстВрем", length = 16, unique = true, nullable = false)
    private UUID _raschetostvremid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RaschetOstVrem", insertable = false, updatable = false)
    private RaschetOstVrem raschetostvrem;


    public OkazKonsult() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getВремяКонсульт() {
      return времяконсульт;
    }

    public void setВремяКонсульт(Integer времяконсульт) {
      this.времяконсульт = времяконсульт;
    }

    public String getПредостУслуга() {
      return предостуслуга;
    }

    public void setПредостУслуга(String предостуслуга) {
      this.предостуслуга = предостуслуга;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}