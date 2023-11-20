# Sorunu Anlamak:
1. 1 butonuna basılmasından, güncellenen değerimizin render edilmesine kadar olan uygulama adımları nelerdir? 
Her adım için kodun hangi bölümünün geçerli olduğunu listeleyin.

* Kullanıcı 1 butonuna tıkladı.
* onClick metodu aktif edilerek clickHandler fonksiyonu tetiklenir.
* clickHandler fonksiyonu içinde dispatch ile state değeri güncellenir.
* Güncelleme işlemi için dispatch edilen addOne() actionuna ulaşılır.
* adOne action'unun type'i ADD_ONE olarak tanımlanır.
* type'dan gelen ADD_ONE'a göre reducer'in return ifadesi çalışır. Return edilen ifadeye göre state spread operatörü ile kopyalanır ve total değeri 1 eklenerek güncellenir. 
...

* TotalDisplay total artı 1'i gösterdi.
